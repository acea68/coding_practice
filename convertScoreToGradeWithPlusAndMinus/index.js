
function convertScoreToGradeWithPlusAndMinus(score) {
  if (score <= 100 && score >= 98) {
    return "A+";
  } else if (score < 98 && score > 92) {
    return "A";
  } else if (score <= 92 && score >= 90) {
    return "A-";
  } else if (score < 90 && score >= 88) {
    return "B+";
  } else if (score < 88 && score > 82) {
    return "B";
  } else if (score <= 82 && score >= 80) {
    return "B-";
  } else if (score < 80 && score >= 78) {
    return "C+";
  } else if (score < 78 && score > 72) {
    return "C";
  } else if (score <= 72 && score >= 70) {
    return "C-";
  } else if (score < 70 && score >= 68) {
    return "D+";
  } else if (score < 68 && score > 62) {
    return "D";
  } else if (score <= 62 && score >= 60) {
    return "D-";
  } else if (score < 60 && score >= 0) {
    return "F";
  } else {
    return "INVALID SCORE";
  }
}