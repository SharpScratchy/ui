const cssClassSuffixer = (className, suffix) => {
  return suffix ? `${className} ${className}--${suffix}` : className;
};

export default cssClassSuffixer;
