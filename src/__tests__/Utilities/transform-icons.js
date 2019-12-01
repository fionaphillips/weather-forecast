import context from 'jest-context';
import 'SetupTests';

import transformIcons from 'Utilities/transform-icons';

describe('transformIcons utility func', () => {
  context('icon with id 500 passed as prop', () => {
    it('renders a WeatherShower component', () => {
      const icon = [500];
      expect(transformIcons(icon).type.displayName).toContain('WeatherShower');
    });
  });

  context('icon with id 600 passed as prop', () => {
    it('renders a WeatherSnow component', () => {
      const icon = [600];
      expect(transformIcons(icon).type.displayName).toContain('WeatherSnow');
    });
  });

  context('icon with id 800 passed as prop', () => {
    it('renders a WeatherSnow component', () => {
      const icon = [800];
      expect(transformIcons(icon).type.displayName).toContain('CloudOff');
    });
  });

  context('icon with id 801 passed as prop', () => {
    it('renders a WeatherSnow component', () => {
      const icon = [801];
      expect(transformIcons(icon).type.displayName).toContain('WeatherCloudy');
    });
  });
});
