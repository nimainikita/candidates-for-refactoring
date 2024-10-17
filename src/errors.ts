const hasStatus = (response: Response, statusCode: number) => {
  return response.status === statusCode;
};

const hasNotFoundStatus = (response: Response) => hasStatus(response, HttpStatusCode.NOT_FOUND_404);
const hasForbiddenStatus = (response: Response) => hasStatus(response, HttpStatusCode.FORBIDDEN_403);
const hasServiceUnavailableStatus = (response: Response) => hasStatus(response, HttpStatusCode.SERVICE_UNAVAILABLE_503);


/*Что было плохо:
1) Нарушение DRY ( логика проверки статуса response.status )
*/

/*Что стало лучше:
1) Создана общая функция hasStatus которая избавила код от нарушения DRY
Обобщенная функция позволяет добавлять новые проверки статуса, не создавая дополнительных функций для каждого нового статуса
*/