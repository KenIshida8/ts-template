// allow function
export const logMessage = (message: string): void => {
  console.log('function basic sample 1: ', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('function basic sample 2: ', message)
}

// 関数型

export const logMessage3 = function (message: string): void {
  console.log('function basic sample 3: ', message)
}

// アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log('function basic sample 4: ', message)

// never 消して戻ることない関数
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ (省略記法)

type logMessage = (message: string) => void
export const logMessage6: logMessage = (message) => {
  console.log('Function basic sample6:', message)
}

// 安全な呼び出しシグネチャ
type FulllogMessage = {
  (message: string): void
}
export const logMessage7: FulllogMessage = (message) => {
  console.log('Function basic sample7: ', message)
}
