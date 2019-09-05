const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    catchPhrase: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
