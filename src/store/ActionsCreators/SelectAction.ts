export const SelectActionFrom = (selectFrom: string) =>
  <const>{
    type: 'SELECT-ACTION-FROM',
    payload: selectFrom,
  };

export const SelectActionTo = (selectTo: string) =>
  <const>{
    type: 'SELECT-ACTION-TO',
    payload: selectTo,
  };
