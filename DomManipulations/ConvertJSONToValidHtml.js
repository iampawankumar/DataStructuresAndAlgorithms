// Input:
const json = { 
  type: 'div', 
  props: { id: 'hello', class: "foo" }, 
  children: [
    {type:'h1', children: 'HELLO' },
    {type:'p', children: [{type:'span', props: {class: "bar" }, children: 'World' }] }
  ]
};

// JSONtoHTML(json);

// Output:

let result = prepareHTML([json])

document.addEventListener('DOMContentLoaded', function() {
    console.log(prepareHTML([json]))
})

function prepareHTML(data){

    let root = document.createDocumentFragment()

    for(let entity of data){
        let newEl = document.createElement(entity.type)

        let props = entity.props
        if(props){
          for(let key in props){
            newEl.setAttribute(key, props[key])
          }
        }

        if(Array.isArray(entity.children)){
            newEl.appendChild(prepareHTML(entity.children))
        }else{
            newEl.textContent = entity.children
        }
        root.appendChild(newEl)
    }

    return root

}