import {creatAccount} from '../creatAccount.js'
test('espera criar conta sem quebrar logica das regras de negocios', () => {
  expect(creatAccount(conta)).toBe(result);
});

conta = {"account": {"active-card": true, "available-limit": 100}}
result = {"account": {"active-card": true, "available-limit": 80}, "violations": []}
