function findMinCost(order) {
  let { weightAtC1, weightAtC2, weightAtC3 } = findWeightAtCenter(order);
  console.log(weightAtC1, weightAtC2, weightAtC3);

  const c1 = "C1",
    c2 = "C2",
    c3 = "C3",
    l = "L";

  let totalCost = 0;

  //all centres has the order

  if (weightAtC1 && weightAtC2 && weightAtC3) {
    if (isLoadingCostEffective(weightAtC1 + weightAtC2, weightAtC3)) {
      totalCost +=
        calculateCost(c1, c2, weightAtC1) +
        calculateCost(c2, c3, weightAtC2) +
        calculateCost(c3, l, weightAtC3);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC3 + weightAtC2, weightAtC1)) {
      totalCost +=
        calculateCost(c3, c2, weightAtC3) +
        calculateCost(c2, c1, weightAtC2) +
        calculateCost(c1, l, weightAtC1);
      return totalCost;
    } else if (
      isLoadingCostEffective(weightAtC2, weightAtC1) &&
      isLoadingCostEffective(weightAtC2, weightAtC3)
    ) {
      totalCost +=
        calculateCost(c1, l, weightAtC1) +
        calculateCost(l, c2, 0) +
        calculateCost(c2, c3, weightAtC2) +
        calculateCost(c3, l, weightAtC3);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC1, weightAtC2)) {
      totalCost +=
        calculateCost(c1, c2, weightAtC1) + calculateCost(c2, l, weightAtC2);
      totalCost += calculateCost(l, c3, 0) + calculateCost(c3, l, weightAtC3);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC2, weightAtC1)) {
      totalCost +=
        calculateCost(c2, c1, weightAtC2) + calculateCost(c1, l, weightAtC1);
      totalCost += calculateCost(l, c3, 0) + calculateCost(c3, l, weightAtC3);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC2, weightAtC3)) {
      totalCost += calculateCost(c1, l, weightAtC1) + calculateCost(l, c2, 0);
      totalCost +=
        calculateCost(c2, c3, weightAtC2) + calculateCost(c3, l, weightAtC3);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC3, weightAtC2)) {
      totalCost += calculateCost(c1, l, weightAtC1) + calculateCost(l, c3, 0);
      totalCost +=
        calculateCost(c3, c2, weightAtC3) + calculateCost(c2, l, weightAtC2);
      return totalCost;
    } else {
      totalCost += calculateCost(c1, l, weightAtC1);
      totalCost += calculateCost(l, c2, 0) + calculateCost(c2, l, weightAtC2);
      totalCost += calculateCost(l, c3, 0) + calculateCost(c3, l, weightAtC3);
      return totalCost;
    }
  }

  // any two centers have the order

  if (weightAtC1 && weightAtC2) {
    if (isLoadingCostEffective(weightAtC1, weightAtC2)) {
      totalCost +=
        calculateCost(c1, c2, weightAtC1) + calculateCost(c2, l, weightAtC2);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC2, weightAtC1)) {
      totalCost +=
        calculateCost(c2, c1, weightAtC2) + calculateCost(c1, l, weightAtC1);
      return totalCost;
    } else {
      totalCost +=
        calculateCost(c1, l, weightAtC1) +
        calculateCost(l, c2, 0) +
        calculateCost(c2, l, weightAtC2);
      return totalCost;
    }
  } else if (weightAtC2 && weightAtC3) {
    if (isLoadingCostEffective(weightAtC3, weightAtC2)) {
      totalCost +=
        calculateCost(c3, c2, weightAtC3) + calculateCost(c2, l, weightAtC2);
      return totalCost;
    } else if (isLoadingCostEffective(weightAtC2, weightAtC3)) {
      totalCost +=
        calculateCost(c2, c3, weightAtC2) + calculateCost(c3, l, weightAtC3);
      return totalCost;
    } else {
      totalCost +=
        calculateCost(c2, l, weightAtC2) +
        calculateCost(l, c3, 0) +
        calculateCost(c3, l, weightAtC3);
      return totalCost;
    }
  } else if (weightAtC1 && weightAtC3) {
    totalCost +=
      calculateCost(c1, l, weightAtC1) +
      calculateCost(l, c3, 0) +
      calculateCost(c3, l, weightAtC3);
    return totalCost;
  } else {
    if (weightAtC1) return calculateCost(c1, l, weightAtC1);
    if (weightAtC2) return calculateCost(c2, l, weightAtC2);
    if (weightAtC3) return calculateCost(c3, l, weightAtC3);
  }
}

const isLoadingCostEffective = (firstWeight, secondWeight) => {
  if (
    secondWeight % 5 !== 0 &&
    Math.ceil(secondWeight / 5) === Math.ceil((firstWeight + secondWeight) / 5)
  )
    return true;
};

const calculateCost = (source, destination, weight) => {
  let cost = 0;
  if (
    (source === "C1" && destination === "C2") ||
    (source === "C2" && destination === "C1")
  )
    return sourceCostPerUnitDistance(weight) * 4;

  if (
    (source === "C1" && destination === "L") ||
    (source === "L" && destination === "C1")
  )
    return sourceCostPerUnitDistance(weight) * 3;

  if (
    (source === "C2" && destination === "L") ||
    (source === "L" && destination === "C2")
  )
    return sourceCostPerUnitDistance(weight) * 2.5;

  if (
    (source === "C2" && destination === "C3") ||
    (source === "C3" && destination === "C2")
  )
    return sourceCostPerUnitDistance(weight) * 3;

  if (
    (source === "C3" && destination === "L") ||
    (source === "L" && destination === "C3")
  )
    return sourceCostPerUnitDistance(weight) * 2;
};
const sourceCostPerUnitDistance = weight => {
  if (weight <= 5) {
    return 10;
  } else {
    cost = 10 + Math.ceil((weight - 5) / 5) * 8;
    return cost;
  }
};

const findWeightAtCenter = order => {
  let weightAtC1 = 0,
    weightAtC2 = 0,
    weightAtC3 = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i].name == "A" || order[i].name == "B" || order[i].name == "C")
      weightAtC1 += order[i].weight * order[i].qty;
    if (order[i].name == "D" || order[i].name == "E" || order[i].name == "F")
      weightAtC2 += order[i].weight * order[i].qty;

    if (order[i].name == "G" || order[i].name == "H" || order[i].name == "I")
      weightAtC3 += order[i].weight * order[i].qty;
  }

  return { weightAtC1, weightAtC2, weightAtC3 };
};

module.exports = findMinCost;
