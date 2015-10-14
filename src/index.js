window.zGraph = module.exports = {
    Canvas2D: require('./Canvas2D'),
    Cell: require('./EventObject'),
    CellRenderer: require('./CellRenderer'),
    CellState: require('./CellState'),
    Dictionary: require('./Dictionary'),
    EventObject: require('./EventObject'),
    Geometry: require('./Geometry'),
    Graph: require('./Graph'),
    Model: require('./Model'),
    Point: require('./Point'),
    Rectangle: require('./Rectangle'),
    Shape: require('./Shape'),
    View: require('./View'),
    class: require('./class'),
    constants: require('./constants'),
    events: require('./events'),
    utils: require('./utils'),
    // changes
    Change: require('./changes/Change'),
    ChildChange: require('./changes/ChildChange'),
    RootChange: require('./changes/RootChange'),
};
