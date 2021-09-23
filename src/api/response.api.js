export const DATA = {
    id: '1',
    name: 'Root',
    count: '7',
    children: [
        {
            id: '2',
            name: 'Parent 1',
            children: [
                {
                    id: '3',
                    name: 'Child 1',
                    children: [
                        {
                            id: '4',
                            name: 'Grandchild 1',
                        }, 
                        {
                            id: '5',
                            name: 'Grandchild 2',
                        }
                    ]
                },
                {
                    id: '6',
                    name: 'Child 2'
                },
                {
                    id: '7',
                    name: 'Child 3'
                }
            ]
        },
        {
            id: '8',
            name: 'Parent 2',
            count: '6',
            children: [
                {
                    id: '9',
                    name: 'Child 1',
                    count: '4'
                },
                {
                    id: '10',
                    name: 'Child 2',
                    count: 2,
                    children: [
                        {
                            id: '11',
                            name: 'Grandchild 1',
                            count: '1'
                        },
                        {
                            id: '12',
                            name: 'Grandchild 2',
                            count: '1'
                        }
                    ]
                }
            ]
        },
        {
            id: '13',
            name: 'Parent 3',
            count: '1',
            children: [
                {
                    id: '14',
                    name: 'Child 1',
                    count: '1'
                }
            ]
        }
    ]
    
};


/*
export const DATA = [
    { "id" : 1, "text" : "Root" },
    { "id" : 2, "text": "Parent 1", "parentId" : 1 },
    { "id" : 3, "text": "Child 1", "parentId" : 2 },
    { "id" : 4, "text": "Grandchild 1", "parentId" : 3 },
    { "id" : 5, "text": "Grandchild 2", "parentId" : 3 },
    { "id" : 6, "text": "Child 2", "parentId" : 2 },
    { "id" : 7, "text": "Child 3", "parentId" : 2 },
    { "id" : 8, "text": "Parent 2", "parentId" : 1 },
    { "id" : 9, "text": "Child 1", "parentId" : 8, "count": 4 },
    { "id" : 10, "text": "Child 2", "parentId" : 8 },
    { "id" : 11, "text": "Grandchild 1", "parentId" : 10, "count": 1 },
    { "id" : 12, "text": "Grandchild 2", "parentId" : 10, "count": 1 },
    { "id" : 13, "text": "Parent 3", "parentId" : 1 },
    { "id" : 14, "text": "Child 1", "parentId" : 13, "count": 1 }
];
*/