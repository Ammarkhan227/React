
const parent = React.createElement("div",{id: "parent"},[


// for creating the 2 child div
    React.createElement("div", { id: "child1" },
// for creating the 2 headings in the same div
    [React.createElement("h1", {}, "This is an H1 Tag by React"),
    React.createElement("h2", {}, "This is an H2 Tag by React")]),

    React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "This is an H1 Tag by React"),
    React.createElement("h2", {}, "This is an H2 Tag by React")])
    
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);