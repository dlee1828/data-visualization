type CorrelationInput = {
  x: number,
  y: number
}[]

// copied from the internet
export function calculateCorrelation(data: CorrelationInput) {
  let n = data.length;
  let sum_x = 0;
  let sum_y = 0;
  let sum_xy = 0;
  let sum_x2 = 0;
  let sum_y2 = 0;

  for (let i = 0; i < n; i++) {
    sum_x += data[i].x;
    sum_y += data[i].y;
    sum_xy += data[i].x * data[i].y;
    sum_x2 += data[i].x * data[i].x;
    sum_y2 += data[i].y * data[i].y;
  }

  let numerator = n * sum_xy - sum_x * sum_y;
  let denominator = Math.sqrt((n * sum_x2 - sum_x * sum_x) * (n * sum_y2 - sum_y * sum_y));

  if (denominator === 0) {
    return 0; // Avoid division by zero error
  }

  return numerator / denominator;
}