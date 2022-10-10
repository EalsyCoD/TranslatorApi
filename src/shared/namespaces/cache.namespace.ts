import { IFavorites } from '../interfaces/Favorites.interface';

export namespace Cache {
  /**
   * Записываем значение
   * @param valuename - имя значения
   *
   */

  export function setValueToStorage(
    valueName: string,
    newFavorites: IFavorites[],
  ): void {
    try {
      localStorage.setItem(valueName, JSON.stringify(newFavorites));
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Проверяем по указанному valuename
   * @param valueName имя значения
   * @returns null если данныых нет
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
   * Проверяем по указанному Извлекаем из локального хранилища
   * @param dictName - имя из которого нужно достать данные
   */
  export function getDictItems<T>(dictName: string): T | [] {
    const dict = getValueFromStorage<T>(dictName);
    if (dict === null) {
      return [];
    }
    return dict;
  }
}
