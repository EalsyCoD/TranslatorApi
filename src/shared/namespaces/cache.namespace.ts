import { Favorites } from "../interfaces/Favorites.interface";

export namespace Cache {
  /**
   *
   * Записываем значение
   */
  export function setValueToStorage(
    valueName: string,
    newFavorites: Favorites[]
  ): void {
    try {
      localStorage.setItem(valueName, JSON.stringify(newFavorites));
    } catch (err) {
      console.error(err);
    }
  }

  /**
   *
   * Проверяем по указанному valuename
   */
  export function getValueFromStorage<T>(valueName: string): T | null {
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

  /**
   *
   * Проверяем по указанному Извлекаем из локального хранилища
   */
  export function getDictItems<T>(dictName: string): T | [] {
    const dict = getValueFromStorage<T>(dictName);
    if (dict === null) {
      return [];
    }
    return dict;
  }
}
