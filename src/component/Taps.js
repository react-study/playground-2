import React from 'react';

const tabData = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, deserunt.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, amet?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ducimus.'
];

const Tabs = ({
    focused,
    changeTab
}) => (
    <ul>
        {tabData.map((tab, i) => (
            <li key={`tabList#${i}`}
                onClick={()=>changeTab(i)}
            >
                <span>#{i}</span>{' '}
                <span style={{
                    display: i === focused ? 'block' : 'none'
                }}>
                    {tab}
                </span>
            </li>
        ))}
    </ul>
);

export default Tabs;
