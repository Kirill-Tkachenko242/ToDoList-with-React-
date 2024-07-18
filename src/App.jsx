import React from 'react';
import TaskSection from './Components/TaskSection';

function App() {
    return (
        <main id="main" style={styles.main}>
            <TaskSection />
        </main>
    );
}

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Times New Roman'
    }
};

export default App;
