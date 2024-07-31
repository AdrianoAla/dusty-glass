import React from 'react';

export default (props) => {
    console.log('Congrats, the setup is successful!');
    console.log('Props received are: ', props);

    return (
    <div>
        <p className='px-4 py-2 text-lg font-bold text-gray-700 bg-gray-100'>Hello World</p>
        <iframe src='https://www.uniweb.app/' />
    </div>
    );
};
