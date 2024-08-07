const extactHeader = (objectKey) => {
  return objectKey.split('_').join(' ').toUpperCase();
}

export default extactHeader;