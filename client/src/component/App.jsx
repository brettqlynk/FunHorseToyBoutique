import React from 'react';
import styles from './App.styles.css';
import MainPage from './Search/MainPage.jsx'
import Account from './Account/index.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import CreateListing from './CreateListing/CreateListing.jsx'

const App = () => {

//  return <div className={styles.main}>hello world!</div>;
// return (
//   <>
//   <MainPage/>
//   </>
// )

  return <div className={styles.main}>hello world!<Account currentUser='Bobby' /></div>;

};

export default App;
