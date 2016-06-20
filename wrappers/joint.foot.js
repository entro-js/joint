
    joint.g = g;
    joint.V = joint.Vectorizer = V;

    if (JointAdapter) JointAdapter.load(joint);

    return joint;

}));
