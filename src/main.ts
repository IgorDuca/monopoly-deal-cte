import shuffleCards from "./scripts/shuffleCards";
import { spawn } from "child_process";

var cards = shuffleCards();
console.log(cards);