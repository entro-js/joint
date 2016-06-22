
    joint.g = g;
    joint.V = joint.Vectorizer = V;

    // Load adapter plugins
    if (adapter) adapter.load(joint);

    return joint;

}));
