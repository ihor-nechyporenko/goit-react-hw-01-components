import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';

const App = () => (
    <div>
        <Profile
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
        <Statistics
            title="Upload stats"
            stats={statisticalData}
        />
    </div>
);

export default App;