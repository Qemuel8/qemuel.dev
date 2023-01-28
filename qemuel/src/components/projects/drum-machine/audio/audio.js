const audio = {
  audio1: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"),
  audio2: new Audio("./Cev_H2.mp3"),
  audio3: new Audio("Heater-1.mp3"),
  audio4: new Audio("Heater-2.mp3"),
  audio5: new Audio("Heater-3.mp3"),
  audio6: new Audio("Heater-4_1.mp3"),
  audio7: new Audio("Heater-6.mp3"),
  audio8: new Audio("Kick_n_hat.mp3"),
  audio9: new Audio("RP4_KICK_1.mp3"),
};

export default function getAudio() {
  return audio;
}
