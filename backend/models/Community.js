const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },

    description: String,

    ward: {
      type: String,
      required: true,
    },

    address: String,
    targetDate: String,

    status: {
      type: String,
      enum: ["Planning", "In Progress", "Completed"],
      default: "Planning",
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    notes: [{
        text: String,
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Community", communitySchema);