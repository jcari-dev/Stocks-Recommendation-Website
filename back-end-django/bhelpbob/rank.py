
# 0 buy 1 sell 2 hold
from urllib import request


def check_request(request_body):

    # print('hello uwu')
    # if request_body['q_array'][0] > request_body['q_array'][1]:
    #     user_preference = 'buy'
    #     #user likes to buy
    # elif request_body['q_array'][1] > request_body['q_array'][0]:
    #     user_preference = 'sell'
    #     #user prefers to sell
    # else:
    #     user_preference = 'hold'
    if request_body['q_array'][4].find('long_term'):
        print(request_body['q_array'][4])
        print('hi')
    else:
        print(request_body['q_array'][4])
        print('not_hi')
    