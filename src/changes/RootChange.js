import Change from './Change';


class RootChange extends Change {

    constructor(model, root) {

        super();

        var that = this;

        that.model = model;
        that.root = root;
        that.previous = root;
    }

    digest() {

        var that = this;
        var model = that.model;
        var previous = that.previous;

        that.root = previous;
        that.previous = model.rootChanged(previous);

        return that;
    }
}


// exports
// -------

export default RootChange;
