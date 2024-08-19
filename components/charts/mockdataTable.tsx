export const mockParticipations = [
    {
      participationId: 'part1',
      createdAt: '2024-08-01T10:00:00Z',
      submitedAt: '2024-08-01T10:05:00Z',
      ticket: {
        ticketId: 'ticket1',
        code: 'CODE001',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user1',
        gift: {
          giftId: 'gift1',
          status: 'WAITING',
          name: 'Smartphone',
          description: 'Latest model smartphone'
        }
      },
      gift: {
        giftId: 'gift1',
        status: 'WAITING',
        name: 'Smartphone',
        description: 'Latest model smartphone'
      }
    },
    {
      participationId: 'part2',
      createdAt: '2024-08-02T11:00:00Z',
      submitedAt: '2024-08-02T11:10:00Z',
      ticket: {
        ticketId: 'ticket2',
        code: 'CODE002',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user2',
        gift: {
          giftId: 'gift2',
          status: 'GIFT_GIVEN',
          name: 'Laptop',
          description: 'High-performance laptop'
        }
      },
      gift: {
        giftId: 'gift2',
        status: 'GIFT_GIVEN',
        name: 'Laptop',
        description: 'High-performance laptop'
      }
    },
    {
      participationId: 'part3',
      createdAt: '2024-08-03T12:00:00Z',
      submitedAt: '2024-08-03T12:15:00Z',
      ticket: {
        ticketId: 'ticket3',
        code: 'CODE003',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user3',
        gift: {
          giftId: 'gift3',
          status: 'WAITING',
          name: 'Headphones',
          description: 'Noise-cancelling headphones'
        }
      },
      gift: {
        giftId: 'gift3',
        status: 'WAITING',
        name: 'Headphones',
        description: 'Noise-cancelling headphones'
      }
    },
    {
      participationId: 'part4',
      createdAt: '2024-08-04T13:00:00Z',
      submitedAt: '2024-08-04T13:20:00Z',
      ticket: {
        ticketId: 'ticket4',
        code: 'CODE004',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user4',
        gift: {
          giftId: 'gift4',
          status: 'CANCELLED',
          name: 'Smartwatch',
          description: 'Stylish smartwatch'
        }
      },
      gift: {
        giftId: 'gift4',
        status: 'CANCELLED',
        name: 'Smartwatch',
        description: 'Stylish smartwatch'
      }
    },
    {
      participationId: 'part5',
      createdAt: '2024-08-05T14:00:00Z',
      submitedAt: '2024-08-05T14:25:00Z',
      ticket: {
        ticketId: 'ticket5',
        code: 'CODE005',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user5',
        gift: {
          giftId: 'gift5',
          status: 'WAITING',
          name: 'Tablet',
          description: 'New tablet with pen'
        }
      },
      gift: {
        giftId: 'gift5',
        status: 'WAITING',
        name: 'Tablet',
        description: 'New tablet with pen'
      }
    },
    {
      participationId: 'part6',
      createdAt: '2024-08-06T15:00:00Z',
      submitedAt: '2024-08-06T15:30:00Z',
      ticket: {
        ticketId: 'ticket6',
        code: 'CODE006',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user6',
        gift: {
          giftId: 'gift1',
          status: 'WAITING',
          name: 'Smartphone',
          description: 'Latest model smartphone'
        }
      },
      gift: {
        giftId: 'gift1',
        status: 'WAITING',
        name: 'Smartphone',
        description: 'Latest model smartphone'
      }
    },
    {
      participationId: 'part7',
      createdAt: '2024-08-07T16:00:00Z',
      submitedAt: '2024-08-07T16:35:00Z',
      ticket: {
        ticketId: 'ticket7',
        code: 'CODE007',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user7',
        gift: {
          giftId: 'gift2',
          status: 'GIFT_GIVEN',
          name: 'Laptop',
          description: 'High-performance laptop'
        }
      },
      gift: {
        giftId: 'gift2',
        status: 'GIFT_GIVEN',
        name: 'Laptop',
        description: 'High-performance laptop'
      }
    },
    {
      participationId: 'part8',
      createdAt: '2024-08-08T17:00:00Z',
      submitedAt: '2024-08-08T17:40:00Z',
      ticket: {
        ticketId: 'ticket8',
        code: 'CODE008',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user8',
        gift: {
          giftId: 'gift3',
          status: 'WAITING',
          name: 'Headphones',
          description: 'Noise-cancelling headphones'
        }
      },
      gift: {
        giftId: 'gift3',
        status: 'WAITING',
        name: 'Headphones',
        description: 'Noise-cancelling headphones'
      }
    },
    {
      participationId: 'part9',
      createdAt: '2024-08-09T18:00:00Z',
      submitedAt: '2024-08-09T18:45:00Z',
      ticket: {
        ticketId: 'ticket9',
        code: 'CODE009',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user9',
        gift: {
          giftId: 'gift4',
          status: 'CANCELLED',
          name: 'Smartwatch',
          description: 'Stylish smartwatch'
        }
      },
      gift: {
        giftId: 'gift4',
        status: 'CANCELLED',
        name: 'Smartwatch',
        description: 'Stylish smartwatch'
      }
    },
    {
      participationId: 'part10',
      createdAt: '2024-08-10T19:00:00Z',
      submitedAt: '2024-08-10T19:50:00Z',
      ticket: {
        ticketId: 'ticket10',
        code: 'CODE010',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user10',
        gift: {
          giftId: 'gift5',
          status: 'WAITING',
          name: 'Tablet',
          description: 'New tablet with pen'
        }
      },
      gift: {
        giftId: 'gift5',
        status: 'WAITING',
        name: 'Tablet',
        description: 'New tablet with pen'
      }
    },
    {
      participationId: 'part11',
      createdAt: '2024-08-11T20:00:00Z',
      submitedAt: '2024-08-11T20:55:00Z',
      ticket: {
        ticketId: 'ticket11',
        code: 'CODE011',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user1',
        gift: {
          giftId: 'gift2',
          status: 'GIFT_GIVEN',
          name: 'Laptop',
          description: 'High-performance laptop'
        }
      },
      gift: {
        giftId: 'gift2',
        status: 'GIFT_GIVEN',
        name: 'Laptop',
        description: 'High-performance laptop'
      }
    },
    {
      participationId: 'part12',
      createdAt: '2024-08-12T21:00:00Z',
      submitedAt: '2024-08-12T22:00:00Z',
      ticket: {
        ticketId: 'ticket12',
        code: 'CODE012',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user2',
        gift: {
          giftId: 'gift3',
          status: 'WAITING',
          name: 'Headphones',
          description: 'Noise-cancelling headphones'
        }
      },
      gift: {
        giftId: 'gift3',
        status: 'WAITING',
        name: 'Headphones',
        description: 'Noise-cancelling headphones'
      }
    },
    {
      participationId: 'part13',
      createdAt: '2024-08-13T22:00:00Z',
      submitedAt: '2024-08-13T23:05:00Z',
      ticket: {
        ticketId: 'ticket13',
        code: 'CODE013',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user3',
        gift: {
          giftId: 'gift4',
          status: 'CANCELLED',
          name: 'Smartwatch',
          description: 'Stylish smartwatch'
        }
      },
      gift: {
        giftId: 'gift4',
        status: 'CANCELLED',
        name: 'Smartwatch',
        description: 'Stylish smartwatch'
      }
    },
    {
      participationId: 'part14',
      createdAt: '2024-08-14T23:00:00Z',
      submitedAt: '2024-08-14T23:55:00Z',
      ticket: {
        ticketId: 'ticket14',
        code: 'CODE014',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user4',
        gift: {
          giftId: 'gift5',
          status: 'WAITING',
          name: 'Tablet',
          description: 'New tablet with pen'
        }
      },
      gift: {
        giftId: 'gift5',
        status: 'WAITING',
        name: 'Tablet',
        description: 'New tablet with pen'
      }
    },
    {
      participationId: 'part15',
      createdAt: '2024-08-15T00:00:00Z',
      submitedAt: '2024-08-15T00:05:00Z',
      ticket: {
        ticketId: 'ticket15',
        code: 'CODE015',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user5',
        gift: {
          giftId: 'gift1',
          status: 'WAITING',
          name: 'Smartphone',
          description: 'Latest model smartphone'
        }
      },
      gift: {
        giftId: 'gift1',
        status: 'WAITING',
        name: 'Smartphone',
        description: 'Latest model smartphone'
      }
    },
    {
      participationId: 'part16',
      createdAt: '2024-08-16T01:00:00Z',
      submitedAt: '2024-08-16T01:15:00Z',
      ticket: {
        ticketId: 'ticket16',
        code: 'CODE016',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user6',
        gift: {
          giftId: 'gift2',
          status: 'GIFT_GIVEN',
          name: 'Laptop',
          description: 'High-performance laptop'
        }
      },
      gift: {
        giftId: 'gift2',
        status: 'GIFT_GIVEN',
        name: 'Laptop',
        description: 'High-performance laptop'
      }
    },
    {
      participationId: 'part17',
      createdAt: '2024-08-17T02:00:00Z',
      submitedAt: '2024-08-17T02:25:00Z',
      ticket: {
        ticketId: 'ticket17',
        code: 'CODE017',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user7',
        gift: {
          giftId: 'gift3',
          status: 'WAITING',
          name: 'Headphones',
          description: 'Noise-cancelling headphones'
        }
      },
      gift: {
        giftId: 'gift3',
        status: 'WAITING',
        name: 'Headphones',
        description: 'Noise-cancelling headphones'
      }
    },
    {
      participationId: 'part18',
      createdAt: '2024-08-18T03:00:00Z',
      submitedAt: '2024-08-18T03:35:00Z',
      ticket: {
        ticketId: 'ticket18',
        code: 'CODE018',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user8',
        gift: {
          giftId: 'gift4',
          status: 'CANCELLED',
          name: 'Smartwatch',
          description: 'Stylish smartwatch'
        }
      },
      gift: {
        giftId: 'gift4',
        status: 'CANCELLED',
        name: 'Smartwatch',
        description: 'Stylish smartwatch'
      }
    },
    {
      participationId: 'part19',
      createdAt: '2024-08-19T04:00:00Z',
      submitedAt: '2024-08-19T04:50:00Z',
      ticket: {
        ticketId: 'ticket19',
        code: 'CODE019',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user9',
        gift: {
          giftId: 'gift5',
          status: 'WAITING',
          name: 'Tablet',
          description: 'New tablet with pen'
        }
      },
      gift: {
        giftId: 'gift5',
        status: 'WAITING',
        name: 'Tablet',
        description: 'New tablet with pen'
      }
    },
    {
      participationId: 'part20',
      createdAt: '2024-08-20T05:00:00Z',
      submitedAt: '2024-08-20T05:55:00Z',
      ticket: {
        ticketId: 'ticket20',
        code: 'CODE020',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user10',
        gift: {
          giftId: 'gift1',
          status: 'WAITING',
          name: 'Smartphone',
          description: 'Latest model smartphone'
        }
      },
      gift: {
        giftId: 'gift1',
        status: 'WAITING',
        name: 'Smartphone',
        description: 'Latest model smartphone'
      }
    },
    {
      participationId: 'part21',
      createdAt: '2024-08-21T06:00:00Z',
      submitedAt: '2024-08-21T06:25:00Z',
      ticket: {
        ticketId: 'ticket21',
        code: 'CODE021',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user1',
        gift: {
          giftId: 'gift2',
          status: 'GIFT_GIVEN',
          name: 'Laptop',
          description: 'High-performance laptop'
        }
      },
      gift: {
        giftId: 'gift2',
        status: 'GIFT_GIVEN',
        name: 'Laptop',
        description: 'High-performance laptop'
      }
    },
    {
      participationId: 'part22',
      createdAt: '2024-08-22T07:00:00Z',
      submitedAt: '2024-08-22T07:30:00Z',
      ticket: {
        ticketId: 'ticket22',
        code: 'CODE022',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user2',
        gift: {
          giftId: 'gift3',
          status: 'WAITING',
          name: 'Headphones',
          description: 'Noise-cancelling headphones'
        }
      },
      gift: {
        giftId: 'gift3',
        status: 'WAITING',
        name: 'Headphones',
        description: 'Noise-cancelling headphones'
      }
    },
    {
      participationId: 'part23',
      createdAt: '2024-08-23T08:00:00Z',
      submitedAt: '2024-08-23T08:35:00Z',
      ticket: {
        ticketId: 'ticket23',
        code: 'CODE023',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user3',
        gift: {
          giftId: 'gift4',
          status: 'CANCELLED',
          name: 'Smartwatch',
          description: 'Stylish smartwatch'
        }
      },
      gift: {
        giftId: 'gift4',
        status: 'CANCELLED',
        name: 'Smartwatch',
        description: 'Stylish smartwatch'
      }
    },
    {
      participationId: 'part24',
      createdAt: '2024-08-24T09:00:00Z',
      submitedAt: '2024-08-24T09:45:00Z',
      ticket: {
        ticketId: 'ticket24',
        code: 'CODE024',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user4',
        gift: {
          giftId: 'gift5',
          status: 'WAITING',
          name: 'Tablet',
          description: 'New tablet with pen'
        }
      },
      gift: {
        giftId: 'gift5',
        status: 'WAITING',
        name: 'Tablet',
        description: 'New tablet with pen'
      }
    },
    {
      participationId: 'part25',
      createdAt: '2024-08-25T10:00:00Z',
      submitedAt: '2024-08-25T10:50:00Z',
      ticket: {
        ticketId: 'ticket25',
        code: 'CODE025',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user5',
        gift: {
          giftId: 'gift1',
          status: 'WAITING',
          name: 'Smartphone',
          description: 'Latest model smartphone'
        }
      },
      gift: {
        giftId: 'gift1',
        status: 'GIFT_GIVEN',
        name: 'Smartphone',
        description: 'Latest model smartphone'
      }
    },
    {
      participationId: 'part26',
      createdAt: '2024-08-26T11:00:00Z',
      submitedAt: '2024-08-26T11:55:00Z',
      ticket: {
        ticketId: 'ticket26',
        code: 'CODE026',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user6',
        gift: {
          giftId: 'gift2',
          status: 'GIFT_GIVEN',
          name: 'Laptop',
          description: 'High-performance laptop'
        }
      },
      gift: {
        giftId: 'gift2',
        status: 'GIFT_GIVEN',
        name: 'Laptop',
        description: 'High-performance laptop'
      }
    },
    {
      participationId: 'part27',
      createdAt: '2024-08-27T12:00:00Z',
      submitedAt: '2024-08-27T12:45:00Z',
      ticket: {
        ticketId: 'ticket27',
        code: 'CODE027',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user7',
        gift: {
          giftId: 'gift3',
          status: 'WAITING',
          name: 'Headphones',
          description: 'Noise-cancelling headphones'
        }
      },
      gift: {
        giftId: 'gift3',
        status: 'WAITING',
        name: 'Headphones',
        description: 'Noise-cancelling headphones'
      }
    },
    {
      participationId: 'part28',
      createdAt: '2024-08-28T13:00:00Z',
      submitedAt: '2024-08-28T13:30:00Z',
      ticket: {
        ticketId: 'ticket28',
        code: 'CODE028',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: false,
        status: 'CANCELLED',
        ticketUserId: 'user8',
        gift: {
          giftId: 'gift4',
          status: 'CANCELLED',
          name: 'Smartwatch',
          description: 'Stylish smartwatch'
        }
      },
      gift: {
        giftId: 'gift4',
        status: 'CANCELLED',
        name: 'Smartwatch',
        description: 'Stylish smartwatch'
      }
    },
    {
      participationId: 'part29',
      createdAt: '2024-08-29T14:00:00Z',
      submitedAt: '2024-08-29T14:40:00Z',
      ticket: {
        ticketId: 'ticket29',
        code: 'CODE029',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'WAITING',
        ticketUserId: 'user9',
        gift: {
          giftId: 'gift5',
          status: 'GIFT_GIVEN',
          name: 'Tablet',
          description: 'New tablet with pen'
        }
      },
      gift: {
        giftId: 'gift5',
        status: 'WAITING',
        name: 'Tablet',
        description: 'New tablet with pen'
      }
    },
    {
      participationId: 'part30',
      createdAt: '2024-08-30T15:00:00Z',
      submitedAt: '2024-08-30T15:50:00Z',
      ticket: {
        ticketId: 'ticket30',
        code: 'CODE030',
        maxValidDate: '2024-12-31T23:59:59Z',
        isValid: true,
        status: 'GIFT_GIVEN',
        ticketUserId: 'user10',
        gift: {
          giftId: 'gift1',
          status: 'WAITING',
          name: 'Smartphone',
          description: 'Latest model smartphone'
        }
      },
      gift: {
        giftId: 'gift1',
        status: 'WAITING',
        name: 'Smartphone',
        description: 'Latest model smartphone'
      }
    }
  ];
  