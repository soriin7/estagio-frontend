/* Endpoint para pegar a lista de marcas
  - Ao carregar a página este endpoint deve ser acionado
  
  `https://parallelum.com.br/fipe/api/v1/carros/marcas`
*/

/* Endpoint para pegar a lista de modelos de carros da marca selecioanda 
  - Deve ser informado o ID da marca no link, exemplificado por: ${brandId}
  
  `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`
*/

/* Endpoint para pegar a lista de anos de lançamento do modelo selecionado
  - Deve ser informado o ID da marca e do modelo, exemplificado por: ${brandId} e ${modelId}
  
  `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`
*/

/* Endpoint para pegar a lista do valor por ano de lançamento
  - Deve ser informado o ID da marca, do modelo e do ano, exemplificado por: ${brandId}, ${modelId} e ${yearId}

  `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`
*/