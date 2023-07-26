type Path = string | string[];

function isObject(value: any): value is Record<string, any> {
    return value && typeof value === 'object' && !Array.isArray(value);
}

function safeGetProperty<T = any>(obj: object, path: Path, defaultValue?: T): T | undefined {
    let pathArray: any[] = Array.isArray(path) ? path : path.split('.').reduce((result: string[], pathPart) => {
        let match = pathPart.match(/([^\[]+)|(\[\d+\])/g); // Split on dots and array accessors
        if (match) {
            result.push(...match);
        }
        return result;
    }, []);

    let value: any = obj;
    for (let key of pathArray) {
        if (isObject(value) || Array.isArray(value)) {
            // If key is an array accessor, remove brackets and convert to number
            if (/\[\d+\]/.test(key)) {
                key = Number(key.replace(/\[|\]/g, ''));
            }
            value = (value as any)[key];
        } else {
            return defaultValue;
        }
    }

    return value === undefined ? defaultValue : value;
}

function safeSetProperty(obj: object, path: Path, value: any): void {
    let pathArray: string[] = Array.isArray(path) ? path : path.split('.');

    let current: any = obj;
    for (let i = 0; i < pathArray.length; i++) {
        let key = pathArray[i];

        if (i < pathArray.length - 1) {
            if (!isObject(current[key]) && !Array.isArray(current[key])) {
                let nextKey = pathArray[i + 1];
                current[key] = isNaN(parseInt(nextKey)) ? {} : [];
            }
            current = current[key];
        } else {
            current[key] = value;
        }
    }

    return current
}

function safeDeleteProperty(obj: object, path: Path): void {
    let pathArray: string[] = Array.isArray(path) ? path : path.split('.');

    let current: any = obj;
    for (let i = 0; i < pathArray.length; i++) {
        let key = pathArray[i];

        if (i < pathArray.length - 1) {
            if (!isObject(current[key]) && !Array.isArray(current[key])) {
                return;
            }
            current = current[key];
        } else {
            delete current[key];
        }
    }

    return current
}

export { safeGetProperty, safeSetProperty, safeDeleteProperty };
