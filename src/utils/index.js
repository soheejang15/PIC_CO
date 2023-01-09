const MAX_GAP = 50;
const LEVEL_GAP_VALUE = 5;

export function getRandomAnswer(currentStage) {
  const blockNum = getLineBlockNum(currentStage);
  const level = blockNum - 2;
  const gap =
    MAX_GAP - level * LEVEL_GAP_VALUE < LEVEL_GAP_VALUE
      ? MAX_GAP - LEVEL_GAP_VALUE
      : level * LEVEL_GAP_VALUE;

  const correctColor = {
    r: Math.random() * (255 - MAX_GAP + gap),
    g: Math.random() * (255 - MAX_GAP + gap),
    b: Math.random() * (255 - MAX_GAP + gap)
  };

  const wrongColor = {
    r: correctColor.r + (MAX_GAP - gap),
    g: correctColor.g + (MAX_GAP - gap),
    b: correctColor.b + (MAX_GAP - gap)
  };

  const correctNum = Math.floor(Math.random() * (blockNum * blockNum) + 1);

  return { correctColor, wrongColor, correctNum };
}

export function getLineBlockNum(currentStage) {
  const lineBlockNum = Math.floor(currentStage / 5) + 2;

  return lineBlockNum;
}
