import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ExperienceItem } from './ExperienceItem';

/**
 * @file Archivo de pruebas para el componente molecular `ExperienceItem`.
 *
 * @description
 * Esta suite de pruebas valida que el componente `ExperienceItem` renderice
 * correctamente todos los datos textuales que recibe a través de sus props.
 * Se utiliza un hook `beforeEach` para renderizar el componente con un objeto
 * mockeado, asegurando que cada prueba se ejecute sobre una instancia limpia
 * del componente.
 *
 * Las pruebas verifican individualmente la presencia de:
 * - El título del puesto.
 * - El nombre de la compañía.
 * - El período de tiempo.
 * - La descripción de la experiencia.
 */
describe('Componente: ExperienceItem', () => {
    const mockExperience = {
        title: 'Practicante Profesional',
        company: 'Banco de Chile',
        period: 'Diciembre 2023 — Enero 2024',
        description: 'Desarrollé una herramienta CLI en Python para analizar y validar mallas de Control-M.',
    };

    // Antes de cada prueba, renderizamos el componente con los datos de mock.
    beforeEach(() => {
        render(<ExperienceItem {...mockExperience} />);
    });

    // Prueba 1: Asegura que el título del puesto se renderice.
    it('debe renderizar el título del puesto correctamente', () => {
        expect(screen.getByText(mockExperience.title)).toBeInTheDocument();
    });

    // Prueba 2: Verifica que el nombre de la compañía esté visible.
    it('debe renderizar el nombre de la compañía', () => {
        expect(screen.getByText(mockExperience.company)).toBeInTheDocument();
    });

    // Prueba 3: Confirma que el período de tiempo se muestra.
    it('debe renderizar el período de la experiencia', () => {
        expect(screen.getByText(mockExperience.period)).toBeInTheDocument();
    });

    // Prueba 4: Valida que la descripción del puesto se renderice.
    it('debe renderizar la descripción de la experiencia', () => {
        expect(screen.getByText(mockExperience.description)).toBeInTheDocument();
    });
});