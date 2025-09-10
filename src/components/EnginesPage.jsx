import { useEffect, useState } from 'react';
import './EnginesPage.css';

const EnginesPage = () => {
    const [engines, setEngines] = useState([]);
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        fetch('/engines.json')
            .then(res => res.json())
            .then(data => setEngines(data))
            .catch(err => console.error('Error loading JSON:', err));
    }, []);

    
    const filteredEngines = engines.filter(engine => {
        const matchesCategory = categoryFilter === 'All' || engine.category === categoryFilter;
        const matchesSearch = engine.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    
    const categories = ['All', ...new Set(engines.map(e => e.category))];

    return (
        <div className="engines-page">
            <h2 className='engines-title'>Car Engines Library</h2>

            <div className="controls">
                <input
                    type="text"
                    placeholder="Search engines..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
                    {categories.map(cat =>
                        <option key={cat} value={cat}>{cat}</option>
                    )}
                </select>
            </div>

            <div className="engines-grid">
                {filteredEngines.map(engine =>
                    <div key={engine.id} className="engine-card">
                        <h2>{engine.name} {engine.year_invented}</h2>
                        <p><strong>Number:</strong> {engine['id']}</p>
                        <p><strong>Category:</strong> {engine.category}</p>
                        <p><strong>Fuel Type:</strong> {engine.fueltype}</p>
                        <p><strong>Year Invented:</strong> {engine['year-invented']}</p>
                        <p><strong>Pros:</strong> {Array.isArray(engine.pros) ? engine.pros.join(', ') : ''}</p>
                        <p><strong>Cons:</strong> {Array.isArray(engine.cons) ? engine.cons.join(', ') : ''}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnginesPage;
