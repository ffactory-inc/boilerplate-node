export const delayMillis = (delayMs: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
};

export const greet = (name: string): string => `Hello ${name}`;

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'));
  console.log('ddd ');
  await delayMillis(1000);
  console.log('done');
  return true;
};
