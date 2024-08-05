const paths = [
    'root/folder1/file1.txt',
    'root/folder1/file2.txt',
    'root/folder2/subfolder1/file3.txt',
    'root/folder2/subfolder2/file4.txt'
  ];
  
  //output
  const output = {
    name: 'root',
    type: 'folder',
    children: [
      {
        name: 'folder1',
        type: 'folder',
        children: [
          { name: 'file1.txt', type: 'file' },
          { name: 'file2.txt', type: 'file' }
        ]
      },
      {
        name: 'folder2',
        type: 'folder',
        children: [
          {
            name: 'subfolder1',
            type: 'folder',
            children: [{ name: 'file3.txt', type: 'file' }]
          },
          {
            name: 'subfolder2',
            type: 'folder',
            children: [{ name: 'file4.txt', type: 'file' }]
          }
        ]
      }
    ]
  }
  

  const root = { name: 'root', type: 'folder', children: [] };

paths.forEach(path => {
  const parts = path.split('/');
  let current = root;

  parts.forEach((part, index) => {
    if (index === 0) return; // Skip 'root' part
    let existing = current.children.find(child => child.name === part);
    if (!existing) {
      existing = { name: part, type: index === parts.length - 1 ? 'file' : 'folder', children: [] };
      current.children.push(existing);
    }
    current = existing;
  });
});

console.log('root', root)