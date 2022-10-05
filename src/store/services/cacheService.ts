export class CacheService {
  getValueFromStorage<T>(valueName: string): T | null {
    const dataString: string | null = localStorage.getItem(valueName);
    if (!dataString) {
      return null;
    }
    try {
      return JSON.parse(dataString);
    } catch {
      return null;
    }
  }

  public getDictItems<T>(dictName: string): T | [] {
    const dict = this.getValueFromStorage<T>(dictName);
    if (dict === null) {
      return [];
    }
    return dict;
  }
}
