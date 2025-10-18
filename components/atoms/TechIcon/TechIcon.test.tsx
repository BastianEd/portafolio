// Importamos las herramientas necesarias de React, Testing Library y Vitest.
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TechIcon } from './TechIcon';

/**
 * == Mocking de Dependencias Externas ==
 * Hacemos un "mock" o simulación de la librería `react-icons`.
 * ¿Por qué? Para aislar nuestro componente. No queremos que la prueba falle si `react-icons`
 * tiene un problema; solo nos importa que nuestro `TechIcon` llame al ícono correcto.
 *
 * La corrección clave aquí es que el mock debe ser una función que acepta props y las
 * pasa al elemento SVG (`(props: any) => <svg {...props} />`). Esto simula cómo
 * un componente de React real recibe y utiliza props como `className`.
 */
vi.mock('react-icons/fa', () => ({
    FaJava: (props: any) => <svg data-testid="java-icon" {...props} />,
    FaCss3Alt: (props: any) => <svg data-testid="css-icon" {...props} />,
    FaHtml5: (props: any) => <svg data-testid="html-icon" {...props} />,
    FaBootstrap: (props: any) => <svg data-testid="bootstrap-icon" {...props} />,
    FaReact: (props: any) => <svg data-testid="react-icon" {...props} />,
}));

vi.mock('react-icons/si', () => ({
    SiJavascript: (props: any) => <svg data-testid="js-icon" {...props} />,
    SiSpringboot: (props: any) => <svg data-testid="spring-icon" {...props} />,
    SiMysql: (props: any) => <svg data-testid="mysql-icon" {...props} />,
    SiJunit5: (props: any) => <svg data-testid="junit5-icon" {...props} />,
    SiSwagger: (props: any) => <svg data-testid="swagger-icon" {...props} />,
    SiTailwindcss: (props: any) => <svg data-testid="tailwind-icon" {...props} />,
    SiTypescript: (props: any) => <svg data-testid="ts-icon" {...props} />,
}));

// `describe` agrupa un conjunto de pruebas relacionadas para el componente `TechIcon`.
describe('Componente Atómico: TechIcon', () => {

    // Prueba 1: El "camino feliz". Verificamos que al pasar un `tech` válido, se renderiza el mock correcto.
    it('debe renderizar el ícono correcto para una tecnología válida', () => {
        render(<TechIcon tech="React" />);
        // `getByTestId` busca el `data-testid` que definimos en nuestro mock.
        expect(screen.getByTestId('react-icon')).toBeInTheDocument();
    });

    // Prueba 2: Verificamos la lógica de normalización de strings.
    it('debe normalizar el nombre de la tecnología y encontrar el ícono', () => {
        render(<TechIcon tech="Spring Boot" />); // Usamos un string con mayúsculas y espacios.
        // Esperamos que el componente lo convierta a "springboot" y encuentre el mock `spring-icon`.
        expect(screen.getByTestId('spring-icon')).toBeInTheDocument();
    });

    // Prueba 3: Verificamos el caso de las tecnologías que no tienen un ícono SVG, sino un texto de fallback.
    it('debe renderizar el componente de fallback para tecnologías específicas', () => {
        render(<TechIcon tech="Mockito" />);

        // El problema del error anterior: `getByText` fallaba porque encontraba "Mockito" tanto en el
        // fallback como en el tooltip.
        // La solución: obtenemos AMBOS elementos con `getAllByText`.
        const allMockitoElements = screen.getAllByText('Mockito');

        // Ahora, buscamos el elemento correcto. Sabemos que el tooltip tiene la clase 'absolute',
        // así que filtramos para quedarnos con el que NO la tiene.
        const fallbackElement = allMockitoElements.find(
            (el) => !el.classList.contains('absolute')
        );

        // Finalmente, afirmamos que este elemento específico (el fallback) existe y tiene el estilo esperado.
        expect(fallbackElement).toBeInTheDocument();
        expect(fallbackElement).toHaveClass('text-xs', 'font-semibold');
    });

    // Prueba 4: Verificamos el comportamiento cuando el `tech` no existe en nuestro `iconMap`.
    it('debe devolver null si la tecnología no se encuentra en el mapa de íconos', () => {
        // `render` devuelve un objeto, del cual desestructuramos `container`.
        const { container } = render(<TechIcon tech="UnknownTech" />);
        // Si un componente de React devuelve `null`, su contenedor estará vacío.
        expect(container.firstChild).toBeNull();
    });

    // Prueba 5: Verificamos la funcionalidad de accesibilidad (el tooltip).
    it('debe renderizar un tooltip con el nombre original de la tecnología', () => {
        render(<TechIcon tech="TypeScript" />);
        // Buscamos el texto del tooltip. A diferencia del ícono, aquí sí nos importa el contenido.
        const tooltip = screen.getByText('TypeScript');
        expect(tooltip).toBeInTheDocument();
        // Verificamos que tenga las clases de TailwindCSS que lo hacen funcionar como un tooltip (inicialmente oculto).
        expect(tooltip).toHaveClass('absolute', 'opacity-0', 'group-hover:opacity-100');
    });

    // Prueba 6: Verificamos que el componente sea personalizable a través de `className`.
    it('debe aplicar la className personalizada al ícono', () => {
        // Renderizamos el componente pasándole una clase CSS extra.
        render(<TechIcon tech="React" className="custom-class" />);
        // Obtenemos el ícono mockeado por su ID de prueba.
        const icon = screen.getByTestId('react-icon');

        // Gracias a que nuestro mock ahora pasa las props, esta prueba funciona.
        expect(icon).toHaveClass('custom-class');
    });
});