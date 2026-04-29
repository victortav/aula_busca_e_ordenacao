const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, WidthType, ShadingType, BorderStyle, VerticalAlign,
        ImageRun } = require('docx');
const fs = require('fs');

// Page setup
const pageWidth = 12240;  // US Letter width
const margin = 1440;      // 1 inch
const contentWidth = pageWidth - 2 * margin;

// Colors
const headerGreen = "7CB342";
const borderGray = "CCCCCC";

// Borders
const border = { style: BorderStyle.SINGLE, size: 6, color: borderGray };
const borders = { top: border, bottom: border, left: border, right: border };

const doc = new Document({
  styles: {
    default: { 
      document: { 
        run: { font: "Arial", size: 22 }  // 11pt
      } 
    }
  },
  sections: [{
    properties: {
      page: {
        size: { width: pageWidth, height: 15840 },
        margin: { top: margin, right: margin, bottom: margin, left: margin }
      }
    },
    children: [
      // Header - Instituto Federal
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA",
            size: 22,
            bold: true
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Curso Técnico de Programação",
            size: 22
          })
        ],
        spacing: { after: 120 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Professor: [Seu Nome]",
            size: 20,
            italics: true
          })
        ],
        spacing: { after: 360 }
      }),

      // PLANO DE AULA header
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "PLANO DE AULA",
                        size: 24,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      // TEMA
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "TEMA: ", bold: true }),
                      new TextRun({ text: "Algoritmos de Busca e Ordenação" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // OBJETIVOS
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "OBJETIVOS",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "GERAL", bold: true })
                    ],
                    spacing: { after: 120 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "Compreender os fundamentos de algoritmos de busca e ordenação, sua aplicação prática em sistemas reais e sua importância para o desenvolvimento de software eficiente." })
                    ],
                    spacing: { after: 240 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "ESPECÍFICOS", bold: true })
                    ],
                    spacing: { after: 120 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Diferenciar Busca Linear de Busca Binária e identificar quando usar cada uma;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Compreender as diferenças de eficiência entre Bubble Sort e Merge Sort;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Interpretar notação Big O para comparar complexidade de algoritmos;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Implementar algoritmos básicos em Python;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Reconhecer a aplicação desses algoritmos em bibliotecas e frameworks reais." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // CONTEÚDO
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "CONTEÚDO",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Motivação: por que busca e ordenação são cruciais no desenvolvimento;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Busca Linear (O(n)) — conceito, implementação e casos de uso;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Busca Binária (O(log n)) — pré-requisito de lista ordenada e ganho de eficiência;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Bubble Sort (O(n²)) — algoritmo didático e suas limitações;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Merge Sort (O(n log n)) — estratégia \"dividir para conquistar\";" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Complexidade de Tempo (Big O) — leitura rápida da notação;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Implementação em Python com exemplos práticos;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Aplicações no mercado: sorted(), Arrays.sort(), bancos de dados, entrevistas técnicas." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // METODOLOGIA
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "METODOLOGIA DE ENSINO",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Aula expositiva dialogada com slides (20 min);" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Demonstrações visuais de cada algoritmo com analogias do cotidiano (lista de chamada, dicionário, baralhos);" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Código Python ao vivo — implementação de Busca Linear, Busca Binária e Bubble Sort (10 min);" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Exercício prático em duplas no quadro branco: execução manual de Bubble Sort e Busca Binária (5 min);" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Discussão sobre aplicações no mercado — conexão com bibliotecas Python, Java, SQL (5 min)." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // AVALIAÇÃO
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "AVALIAÇÃO DO PROCESSO DE ENSINO E APRENDIZAGEM",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Participação durante exercício em duplas no quadro branco;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Capacidade de explicar a diferença de eficiência entre algoritmos durante discussão;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Compreensão demonstrada através de perguntas e respostas ao longo da aula;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Exercício de fixação para casa: implementar Busca Binária em Python sem consultar slides (entrega na próxima aula)." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // RECURSOS
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "RECURSOS NECESSÁRIOS",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Projetor ou TV para apresentação de slides;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Computador com Python 3.x instalado para demonstrações ao vivo;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Quadro branco e pincéis;" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Slides da apresentação (arquivo .pptx fornecido);" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "• Exemplos de código Python (repositório disponibilizado previamente)." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // CRONOGRAMA
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "CRONOGRAMA DA AULA (40 minutos)",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "0–5 min: ", bold: true }),
                      new TextRun({ text: "Motivação — Por que isso importa? (slide com analogia da lista de chamada)" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "5–13 min: ", bold: true }),
                      new TextRun({ text: "Busca Linear vs Busca Binária — Explicação + código Python" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "13–23 min: ", bold: true }),
                      new TextRun({ text: "Bubble Sort vs Merge Sort — Demonstração visual + código" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "23–30 min: ", bold: true }),
                      new TextRun({ text: "Complexidade Big O — Tabela comparativa" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "30–35 min: ", bold: true }),
                      new TextRun({ text: "Exercício no quadro branco em duplas" })
                    ],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "35–40 min: ", bold: true }),
                      new TextRun({ text: "O que o mercado usa + próximos passos + exercício para casa" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ text: "", spacing: { after: 240 } }),

      // REFERÊNCIAS
      new Table({
        width: { size: contentWidth, type: WidthType.DXA },
        columnWidths: [contentWidth],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                shading: { fill: headerGreen, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "REFERÊNCIAS",
                        size: 22,
                        bold: true,
                        color: "FFFFFF"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders,
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                width: { size: contentWidth, type: WidthType.DXA },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({ text: "CORMEN, Thomas H. et al. " }),
                      new TextRun({ text: "Algoritmos: Teoria e Prática", bold: true }),
                      new TextRun({ text: ". 3. ed. Rio de Janeiro: Elsevier, 2012." })
                    ],
                    spacing: { after: 120 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "PYTHON SOFTWARE FOUNDATION. " }),
                      new TextRun({ text: "Python Documentation - Sorting HOW TO", bold: true }),
                      new TextRun({ text: ". Disponível em: <https://docs.python.org/3/howto/sorting.html>. Acesso em: " }),
                      new TextRun({ text: new Date().toLocaleDateString('pt-BR') }),
                      new TextRun({ text: "." })
                    ],
                    spacing: { after: 120 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "SEDGEWICK, Robert; WAYNE, Kevin. " }),
                      new TextRun({ text: "Algorithms", bold: true }),
                      new TextRun({ text: ". 4. ed. Boston: Addison-Wesley, 2011." })
                    ],
                    spacing: { after: 120 }
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({ text: "VISUALGO. " }),
                      new TextRun({ text: "Visualising Data Structures and Algorithms through Animation", bold: true }),
                      new TextRun({ text: ". Disponível em: <https://visualgo.net>. Acesso em: " }),
                      new TextRun({ text: new Date().toLocaleDateString('pt-BR') }),
                      new TextRun({ text: "." })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  }]
});

// Save
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("plano_de_aula_algoritmos.docx", buffer);
  console.log("Plano de aula criado com sucesso!");
});
