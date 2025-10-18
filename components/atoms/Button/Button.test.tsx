// Archivo de pruebas para el componente `Button`.
// Aquí uso Testing Library para renderizar el componente y Vitest
// como runner/mocks (vi) para espiar funciones.
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

/**
 * @file Archivo de pruebas para el componente atómico `Button`.
 *
 * @description
 * Esta suite de pruebas valida el comportamiento polimórfico y funcional del
 * componente `Button`. Las pruebas se aseguran de que el componente actúe
 * correctamente tanto como un botón estándar como un enlace, dependiendo de
 * las props que reciba.
 *
 * Se cubren los siguientes casos de uso:
 * 1.  Renderizado del contenido principal (`children`).
 * 2.  Transformación a un elemento `<a>` cuando se proporciona la prop `href`.
 * 3.  Ejecución de la función `onClick` al simular la interacción del usuario.
 */
// Grupo de pruebas para el componente Button.
// `describe` nos permite agrupar varios `it` relacionados.
describe('Componente: Button', () => {

    // Caso de prueba 1: comprobamos que el contenido (children)
    // se renderiza correctamente dentro del botón.
    it('debe renderizar el contenido (children) correctamente', () => {
        // Renderizamos el componente con el texto "Contáctame".
        render(<Button>Contáctame</Button>);

        // Usamos `getByText` para buscar el texto y comprobamos
        // que esté presente en el documento.
        expect(screen.getByText('Contáctame')).toBeInTheDocument();
    });

    // Caso de prueba 2: cuando se pasa la prop `href`, el componente
    // debe renderizar un elemento <a> (enlace) en lugar de un <button>.
    it('debe renderizarse como un enlace si se proporciona href', () => {
        const testUrl = 'https://example.com';

        // Renderizamos el Button con la prop `href`.
        render(<Button href={testUrl}>Enlace</Button>);

        // `getByRole('link')` obtiene el elemento con rol de enlace (<a>).
        const linkElement = screen.getByRole('link');

        // Comprobamos que el enlace exista en el documento y que
        // su atributo href coincida con la URL proporcionada.
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', testUrl);
    });

    // Caso de prueba 3: comprobamos que la función `onClick` se llame
    // cuando el usuario hace clic sobre el botón.
    it('debe llamar a la función onClick cuando se hace clic', () => {
        // `vi.fn()` crea una función espía (mock) que registra llamadas.
        const handleClick = vi.fn();

        // Renderizamos el Button con la prop `onClick` apuntando a la función espía.
        render(<Button onClick={handleClick}>Click Me</Button>);

        // Simulamos el clic sobre el texto del botón.
        fireEvent.click(screen.getByText('Click Me'));

        // Verificamos que la función mock haya sido llamada exactamente una vez.
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

});