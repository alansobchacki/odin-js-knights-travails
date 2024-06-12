function knightTravails(start, finish) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[...start, []]];
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));

  while (queue.length > 0) {
    const [x, y, path] = queue.shift();
    const newPath = [...path, [x, y]];

    if (x === finish[0] && y === finish[1]) {
      return newPath;
    }

    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, newPath]);
      }
    }
  }

  return null;
}

const path = knightTravails([0, 0], [3, 3]);

function displayKnightMoves(path) {
  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);

  path.forEach((square) => {
    console.log(square);
  });
}

displayKnightMoves(path);
