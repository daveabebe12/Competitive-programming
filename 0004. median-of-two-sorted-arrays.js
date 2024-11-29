var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const index = Math.floor((sorted.length - 1) / 2);

  return sorted.length % 2 === 0
    ? (sorted[index] + sorted[index + 1]) / 2
    : sorted[index];
};
