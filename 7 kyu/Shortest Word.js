function findShort(string) {
  return string.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

