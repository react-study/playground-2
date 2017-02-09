import React from 'react';
const tabData = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, voluptas!',
    'Alias magni beatae hic expedita accusantium, vero ipsam tempore repellendus.',
    'Rerum reprehenderit hic ratione voluptatibus quod dolor ad maxime iure.',
    'Expedita facilis facere veritatis autem. Autem asperiores error, rerum at.',
];

const Tabs = ({
    focused,
    changeTab
}) => (
    <ul>
        {tabData.map((tab, i) => (
            <li key={`tabList#${i}`}
                onClick={()=> changeTab(i)}
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
