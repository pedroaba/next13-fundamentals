export async function LongWaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <h1>Long Wait Component</h1>
}
