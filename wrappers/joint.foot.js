
    joint.g = g;
    joint.V = joint.Vectorizer = V;

    // Allow adapter to override joint properties
    if (adapter) adapter.load(joint);

    return joint;

}));
