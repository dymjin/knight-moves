let q = [];
const dv = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];

let visited = new Set();

const posToStr = (pos) => pos.join("");

const knightMoves = (s, e) => bfs(s, e);

const bfs = (s, e) => {
  q.push([s, [s]]);
  visited.add(posToStr(s));

  while (q.length > 0) {
    let c = q.shift();
    let [cpos, path] = c;

    if (posToStr(cpos) === posToStr(e)) {
      console.log(
        `You made it in ${path.length - 1} moves! Here's your path:\n`
      );
      for (let n of path) {
        console.log(`${n}`);
      }
    }

    exploreNeighbors(cpos, path);
  }
};

const exploreNeighbors = (cpos, path) => {
  for (let i = 0; i < 8; i++) {
    let [cx, cy] = cpos;
    let d = dv[i];
    let nx = cx + d[0];
    let ny = cy + d[1];

    if (nx < 0 || ny < 0) continue;
    if (nx > 7 || ny > 7) continue;

    if (visited.has(posToStr([nx, ny]))) continue;

    // credit to SeasonalShot for storing path on current node : https://stackoverflow.com/a/50575971
    q.push([
      [nx, ny],
      [...path, [nx, ny]],
    ]);
    visited.add(posToStr([nx, ny]));
  }
};

knightMoves([2, 2], [2, 1]);
