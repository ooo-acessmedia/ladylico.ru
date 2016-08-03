<?php
return array(
    'fields' => array(
        'curve' => NULL,
        'width' => NULL,
        'length' => NULL
    )
, 'fieldMeta' => array(
        'curve' => array(
            'dbtype' => 'text'
        , 'phptype' => 'json'
        , 'null' => true,
        ),
        'width' => array(
            'dbtype' => 'text'
        , 'phptype' => 'json'
        , 'null' => true
        ),

        'length' => array(
            'dbtype' => 'text'
        , 'phptype' => 'json'
        , 'null' => true,
            'default' => NULL
        )
    )
, 'indexes' => array(
        'curve' => array(
            'alias' => 'curve'
        , 'primary' => false
        , 'unique' => false
        , 'type' => 'BTREE'
        , 'columns' => array(
                'curve' => array(
                    'length' => ''
                , 'collation' => 'A'
                , 'null' => false
                )
            )
        ),

        'width' => array(
            'alias' => 'width'
        , 'primary' => false
        , 'unique' => false
        , 'type' => 'BTREE'
        , 'columns' => array(
                'width' => array(
                    'length' => ''
                , 'collation' => 'A'
                , 'null' => false
                )
            )
        ),

        'length' => array(
            'alias' => 'length'
        , 'primary' => false
        , 'unique' => false
        , 'type' => 'BTREE'
        , 'columns' => array(
                'length' => array(
                    'length' => ''
                , 'collation' => 'A'
                , 'null' => false
                )
            )
        )
    )
);