interface PasswordStrength {
  weak: boolean;
  medium: boolean;
  strong: boolean;
}

const getPasswordStrength = (
  inputValue: string | undefined
): string | undefined => {
  if (!inputValue) return;

  const hasLowerCase = /[a-z]/.test(inputValue);
  const hasUpperCase = /[A-Z]/.test(inputValue);
  const hasNumber = /\d/.test(inputValue);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(inputValue);
  const hasMoreSevenSymbols = inputValue.length > 7;

  const conditionsMet = [
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
    hasMoreSevenSymbols,
  ];
  const numConditionsMet = conditionsMet.filter(Boolean).length;

  const strength: PasswordStrength = {
    weak: numConditionsMet >= 1 && numConditionsMet <= 2,
    medium: numConditionsMet >= 3 && numConditionsMet < 5,
    strong: numConditionsMet === 5,
  };

  const strengthKeys = Object.keys(strength);
  const trueKey = strengthKeys.find(
    (key) => strength[key as keyof PasswordStrength]
  );

  return trueKey;
};

export default getPasswordStrength;
