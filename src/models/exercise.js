export class Exercise {
  constructor(name, category, muscles = []) {
    this._name = name;
    this._category = category;
    this._muscles = muscles;
  }

  toString() {
    return (
      "Name: " +
      this._name +
      ", Category: " +
      this._category +
      ", Muscles: " +
      this._muscles.join(",")
    );
  }

  set category(newCategory) {
    this._category = newCategory;
  }

  set muscles(newMusclesList) {
    this._muscles = newMusclesList;
  }
}

export const exerciseConvertor = {
  toFirestore: (exercise) => {
    return {
      name: exercise.name,
      category: exercise.category,
      muscles: exercise.muscles,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Exercise(data.name, data.category, data.muscles);
  },
};
