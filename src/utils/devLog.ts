import chalk from "chalk";

// 开发用日志
export function devLog(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
        console.log('[devLog]', ...args);
    }
}

export function devInfo(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
        console.info(chalk.blue('[devInfo]', ...args));
    }
}

export function devWarning(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
        console.warn(chalk.yellow('[devWarning]', ...args));
    }
}

export function devError(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
        console.error(chalk.red('[devError]', ...args));
    }
}
